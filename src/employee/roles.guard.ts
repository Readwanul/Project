// roles.guard.ts
import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from './role.enum';
import { ROLES_KEY } from './roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
        context.getHandler(),
        context.getClass(),
    ]);
    if (!requiredRoles) {
        return true; // No roles required, allow access
    }

    const { user } = context.switchToHttp().getRequest();
    const hasRole = () => requiredRoles.includes(user.role);
    if (user && hasRole()) {
        return true;
    }
    throw new ForbiddenException('You do not have the required role');
  }
}
