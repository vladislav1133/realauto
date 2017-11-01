<?php

namespace App\Http\Middleware;

use Closure;
use App\User;

class AdminAuthenticate
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        $auth = Auth::guard($guard);

        if(!$auth->user()->isAdmin()){
            return response('Access denied',401);
        }
        return $next($request);
    }
}
