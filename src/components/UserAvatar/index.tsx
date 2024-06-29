import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import {
    Avatar,
    AvatarFallback,
    AvatarImage
} from "@/components/ui/avatar";

const avatarSizes = cva(
    "",
    {
        variants: {
            size: {
                default: "h-8 w-8",
                lg: "h-14 w-14",
            },
            defaultVariants: {
                size: "default "
            }
        }
    }
)
interface UserAvatarProps extends VariantProps<typeof avatarSizes> {
    imageUrl: string,
    username: string,
    isLive?: boolean,
    showBadge?: boolean
}

const UserAvatar = ({
    imageUrl,
    username,
    isLive,
    showBadge,
    size 
}: UserAvatarProps ) => {
    const canShowBadge = showBadge && isLive;

    return (
        <div className="relative">
            <Avatar
                className= {cn(
                    isLive && "ring-2 ring-rose-500 border border-background",
                    avatarSizes({ size })
                )}
            >
                <AvatarImage src = {imageUrl} className = "object-cover"/>
                <AvatarFallback>
                    {username[0]}
                    {username[username.length - 1]}
                </AvatarFallback>
            </Avatar>
        </div>
    )
}

export default UserAvatar