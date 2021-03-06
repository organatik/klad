import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class PasswordTransformInterceptor<T> implements NestInterceptor<T> {
  intercept(context: ExecutionContext, next: CallHandler) {
    return next.handle().pipe(map(data => {
      // console.log(context);
      const {password, ...filteredPassword} = data.user;
      const token = data.token;
      return ({filteredPassword, token});
    }));
  }
}
