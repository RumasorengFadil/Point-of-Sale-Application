<?php

namespace App\Http\Requests\POS\Settings;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CashierProfileRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'realName' => ['required', 'string', 'max:255'],
            'username' => ['required', 'string', 'max:255', Rule::unique(User::class)->ignore($this->user()->id)],
            'phoneNumber' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', Rule::unique(User::class)->ignore($this->user()->id)],
            'image' => 'nullable|image|mimes:jpg,jpeg,png|max:4096',
            'password' => 'nullable|string|min:8|required_with:passwordConfirmation',
            'confirmPassword' => 'nullable|string|min:8|same:password|required_with:password',
        ];
    }

    public function messages()
    {
        return [
            'realName.required' => 'Nama asli harus diisi!.',
            'realName.max' => 'Nama asli maksimal 255 huruf!.',
            'username.required' => 'Username harus diisi!.',
            'username.max' => 'Username maksimal 255 huruf!.',
            'phoneNumber.required' => 'Nomor telepon harus diisi!.',
            'phoneNumber.max' => 'Nomor telepon maksimal 255 huruf!.',

            'image.required' => 'Member image harus diisi!.',
            'image.image' => 'File harus berupa gambar!',
            'image.mimes' => 'Eksitensi yang didukung:jpg,jpeg, dan png',
            'image.max' => 'Gambar tidak boleh melebihi 4mb!',

            'password.required' => 'Password harus diisi!.',
            'password.required_with' => 'Password harus diisi!.',
            'password.min' => 'Password minimal 8 karakter!',
            'confirmPassword.required' => 'Konfirmasi password harus diisi!',
            'confirmPassword.required_with' => 'Konfirmasi password harus diisi!',
            'confirmPassword.min' => 'Konfirmasi password minimal 8 karakter!',
            'confirmPassword.same' => 'Password dan konfirmasi password tidak cocok!.',
        ];
    }
}
