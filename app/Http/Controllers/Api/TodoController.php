<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Http\Requests\TodoRequest;
use App\Models\Todo;

class TodoController extends Controller
{
    public function getTodos(Request $req)
    {
        return response()->json(Auth::user()->todos);
    }

    public function getTodo($id)
    {
        $todo = Todo::findOrFail($id);
        return response()->json($todo);
    }

    public function addTodo(TodoRequest $req)
    {
        $todo = $req->all();
        $todo['user_id'] = Auth::id();
        return response()->json(Todo::create($todo), 201);
    }

    public function editTodo(TodoRequest $req, $id)
    {
        $todo = Todo::findOrFail($id);
        $todo->update($req->all());
        return response()->json($todo);
    }

    public function deleteTodo(Request $req, $id)
    {
        $todo = Todo::findOrFail($id);
        $todo->delete();
        return response()->json('', 204);
    }

    public function deleteTodos()
    {
        Auth::user()->todos()->delete();
        return response()->json('', 204);
    }
}
