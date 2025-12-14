import {
     Waves,
     Mountain,
     Flame,
     Sun,
     Wind,
     Droplets,
     Trees,
     AlertCircle,
     LucideIcon
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
     Waves,
     Mountain,
     Flame,
     Sun,
     Wind,
     Droplets,
     Trees,
     AlertCircle,
};

interface DisasterIconProps {
     iconName: string;
     className?: string;
     size?: number;
}

export const DisasterIcon: React.FC<DisasterIconProps> = ({ iconName, className = '', size = 20 }) => {
     const Icon = iconMap[iconName] || AlertCircle;
     return <Icon size={size} className={className} />;
};

export default DisasterIcon;
