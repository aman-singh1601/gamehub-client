import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface NavItemProps {
    icon: LucideIcon;
    label: string;
    href: string;
}

export const NavItem = ({
    icon: Icon,
    label,
    href
}: NavItemProps) => {
    const navigate = useNavigate();
    return (
        <Button
            asChild
            variant="ghost"
            className="w-full h-12 justify-start"
            onClick={() => navigate(href)}
        >
                <div className="flex items-start">
                    <Icon
                        className="h-5 w-5 mr-2"
                    />
                    <span className='truncate'>
                        {label}
                    </span>
                </div>
        </Button>
    )
}