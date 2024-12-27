<?php

namespace App\Repositories\Settings;

class UserProfileRepository
{
    public function update(array $data, $user): bool
    {
        return $user->update($this->mapData($data));
    }
    private function mapData(array $data): array
    {
        $mappedData = [
            'username' => $data['username'],
            'real_name' => $data['realName'],
            'email' => $data['email'],
            'phone_number' => $data['phoneNumber'],
        ];

        if (!is_null($data['password'])) {
            $mappedData["password"] = bcrypt($data['password']); // Hash password before storing
        }
        if (!is_null($data['image'])) {
            $mappedData["image"] = $data['image'];
        }

        return $mappedData;
    }
}