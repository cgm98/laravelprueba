<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules\Password;

use function Laravel\Prompts\error;

class AuthController extends Controller
{
    public function register(Request $request)
    {

        try {
            $data = $request->validate([
                'name' => 'required|string',
                'lastName' => 'required|string',
                'email' => 'required|string|unique:users,email',
                'password' => [
                    'required',
                    'confirmed',
                    Password::min(8)->mixedCase()->numbers()->symbols(),
                ],
            ]);
            /* App */
            $user = User::create([
                'name' => $data['name'],
                'last_name' => $data['lastName'],
                'email' => $data['email'],
                'password' => bcrypt($data['password'])
            ]);
            return response()->json(['message' => 'User registered successfully', 'user' => $user], 201);
            //return response()->json($data, 200);
        } catch (ValidationException $e) {
            // Obtener los campos no válidos
            $invalidFields = array_keys($e->validator->failed());

            return response()->json([
                'error' => 'Error durante la validación',
                'message' => $e->getMessage(),
                'invalidFields' => $invalidFields,
            ], 422);
        } catch (\Throwable $th) {
            return response()->json([
                'error' => 'Error general',
                'message' => $th->getMessage(),
            ], 500);
        }
    }
    // public function login(Request $request)
    // {
    //     try {
    //         $credentials = $request->validate([
    //             'email' => 'required|string|unique:users,email',
    //             'password' => [
    //                 'required',
    //             ],
    //             'remember' => 'boolean',
    //         ]);
    //         $remember = $credentials['remember']??false;
    //         unset($credentials['remember']);

    //         if(!Auth::attempt($credentials,$remember)){
    //             return response([ 'error'=>'provided credentials is not correct'],422);
    //         }
    //         $user = Auth::user();
    //         $token = $user->createToken('main')->plainTextToken(); 
            
    //         return response([
    //             'user'=>$user,
    //             'token'=>$token
    //         ]);
    //     } catch (\Throwable $th) {
    //         return response()->json([
    //             'error' => 'Error general',
    //             'message' => $th->getMessage(),
    //             'more' => $th->getCode(),
    //         ], 500);
    //     }
    // }

    public function login(Request $request)
{
    try {
        $credentials = $request->validate([
            'email' => 'required|string',
            'password' => 'required',
            'remember' => 'boolean',
        ]);

        $remember = $credentials['remember'] ?? false;
        unset($credentials['remember']);

        if (!Auth::attempt($credentials, $remember)) {
            return response([
                'error' => 'Invalid credentials',
                'message'=>'Usuario y/o contraseña incorrectos']
                , 422);
        }

        $user = Auth::user();
        $token = $user->createToken('main');

        return response([
            'user' => $user,
            'token' => $token->plainTextToken
        ]);
    } catch (\Throwable $th) {
        return response()->json([
            'error' => 'Error general',
            'message' => $th->getMessage()
        ], 422);
    }
}
public function logout(Request $request){
    $user = Auth::user();
    $user->tokens()->where('id', $user->currentAccessToken()->id)->delete();

    return response()->json(['message' => 'Logout successful']);
}
}
