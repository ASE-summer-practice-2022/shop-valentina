<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use App\Http\Requests\LoginRequest;
use App\Models\User;

class LoginController extends Controller
{
    public function register(LoginRequest $req)
    {
        $creds = $req->all();
        $creds['password'] = Hash::make($creds['password']);

        return User::create($creds);
    }

    public function login(LoginRequest $req)
    {
        if (Auth::attempt($req->all())) {
            $req->session()->regenerate();
            return $req->user();
        }
        throw new ValidationException('Incorrect email/password');
    }

    public function logout()
    {
        return Auth::logout();
    }
}
