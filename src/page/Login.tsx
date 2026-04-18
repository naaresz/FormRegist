import { useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { BaseInput } from "../components/ui/BaseInput";
import { InputPassword } from "../components/ui/InputPassword";
import { TextArea } from "../components/ui/TextArea";
import { Select } from "../components/ui/Select";
import { Button } from "../components/ui/Button";

const schema = z.object({
    name: z.string().min(1, "Nama lengkap harus diisi"),
    email: z.string().email("Format email tidak valid"),
    password: z.string().min(8, "Minimal 8 Karakter"),
    bio: z.string().max(50, "Bio maksimal 50 karakter").optional(),
    event: z.string().min(1, "Pilih event dulu")
})

type FormValues = z.infer<typeof schema>

export default function RegisterForm() {
    const {
        register,
        handleSubmit,
        formState:{ errors },
        reset
    } = useForm<FormValues>({ resolver: zodResolver(schema) });

    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (data: FormValues) => {
        setIsLoading(true);
    
        // simulasi request
        await new Promise ((resolve) => setTimeout(resolve, 2000));
    
        console.log("DATA MASUK:", data);

        reset();

        setIsLoading(false);
    };


    return (

        <div className="min-h-screen flex items-center  justify-center bg-gray-100 py-10">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">

                <h2 className="text-3xl font-bold text-center mb-1 text-red-900">
                    Selamat Datang!
                </h2>
                <p className="text-center mb-3 text-gray-500">
                    Registrasi untuk melanjutkan
                </p>

                <form 
                    onSubmit={handleSubmit(onSubmit)} 
                    className="flex flex-col gap-4"
                >
                    <BaseInput 
                    label="Nama" 
                    name="name"
                    register={register}
                    error={errors.name?.message}
                    placeholder="Nama lengkap anda"
                    />

                    <BaseInput
                    label="Email" 
                    name="email"
                    register={register}
                    error={errors.email?.message}
                    placeholder="email@anda.com"
                    />

                    <InputPassword 
                    label="Password"
                    name="password"
                    register={register}
                    error={errors.password?.message}
                    placeholder="........"
                    />

                    <TextArea 
                    label="Bio"
                    name="bio"
                    register={register}
                    />

                    <Select 
                    label="Event"
                    name="event"
                    register={register}
                    options={[
                        { label: "IT Seminar", value:"seminar" },
                        { label: "IT Workshop", value:"workshop" },
                        { label: "IT Competition", value:"competition" },
                        { label: "IT Talkshow", value:"talkshow" }
                    ]}
                    />

                    <Button 
                    type="submit" 
                    label="Daftar" 
                    isLoading={isLoading}/>

                </form>
                
            </div>
        </div>
    );
};
