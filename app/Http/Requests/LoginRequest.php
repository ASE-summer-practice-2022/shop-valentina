<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        switch ($this->route()->uri) {
            case 'api/register':
                return [
                    'name' => ['required'],
                    'email' => ['required', 'email'],
                    'password' => ['required'],
                ];

            case 'api/login':
                return [
                    'email' => ['required', 'email'],
                    'password' => ['required'],
                ];
        }
    }
}
