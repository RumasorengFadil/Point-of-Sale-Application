import FormField from "@/Components/FormField/FormField";

const UserProfileFormField = ({ handleChange, data }) => {
    return (
        <>
            <FormField
                onChange={handleChange}
                name="realName"
                label="Nama Asli"
                type="text"
                placeholder="Nama Asli"
                value={data.realName}
            />
            <FormField
                onChange={handleChange}
                name="username"
                label="Username"
                type="text"
                placeholder="Username"
                value={data.username}
            />
            <FormField
                onChange={handleChange}
                name="phoneNumber"
                label="No Telp"
                type="text"
                placeholder="No Telp"
                value={data.phoneNumber}
            />
            <FormField
                onChange={handleChange}
                name="email"
                label="Email"
                type="email"
                placeholder="Email"
                value={data.email}
            />
            <FormField
                onChange={handleChange}
                name="password"
                label="Ganti Password"
                type="password"
                placeholder="Ganti Password"
            />
            <FormField
                onChange={handleChange}
                name="confirmPassword"
                label="Konfirmasi Password"
                type="password"
                placeholder="Konfirmasi Password"
            />
        </>
    );
};

export default UserProfileFormField;
