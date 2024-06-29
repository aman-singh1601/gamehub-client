import React, { useEffect, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "@/store/actions";

const LoginDialog = ({
    children,
    open,
    setOpen
}: {
    children: React.ReactNode,
    open: boolean,
    setOpen: (arg0: boolean) => void
}) => {

    const dispatch = useDispatch();
    
    const {success} = useSelector((state: any )=> state.auth);

    useEffect(() => {
        if(success) {
            console.log(success);
            setOpen(false);
        }

    }, [success])


    const [number, setNumber] = useState<string>("");

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(userRegister(number));
    }
    return (
        <Dialog open = {open}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent >
                <DialogHeader>
                    <DialogTitle>Login / Sign Up</DialogTitle>
                    <DialogDescription className="flex flex-col space-y-4 pt-4">
                        Enter your mobile number:
                    </DialogDescription>
                </DialogHeader>
                <form
                    onSubmit={handleRegister}
                >
                    <Input
                        onChange={(e) => setNumber(e.target.value)}
                        type="number"
                        className='bg-background border-none text-white p-6 text-md tracking-wider  rounded-r-none 
                            focus-visible:ring-0 
                            focus-visible:ring-transparent 
                            focus-visible:ring-offset-0'/>
                    <Button
                        type="submit"
                        className="rounded-md w-full text-primary font-medium bg-blue-600 hover:bg-blue-600/80"
                    >
                        Continue
                    </Button>
                </form>

            </DialogContent>
        </Dialog>
    )
}

export default LoginDialog;