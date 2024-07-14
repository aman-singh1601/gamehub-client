import { Input } from '@/components/ui/input'
import CopyButton from './CopyButton'

const UrlCard = ({
    label,
    value
}: {
    label: string,
    value: string,
}) => {
    console.log(value);

    // todo add server url and token to start streaming
    return (
        <div className='rounded-xl bg-muted p-6'>
            <div className='flex items-center gap-x-10'>
                <p className='font-semibold shrink-0'>
                    {label}
                </p>
                <div className="space-y-2 w-full">
                    <div className='w-full flex items-center gap-x-2'>
                        <Input
                            value={value}
                            disabled
                            // placeholder='Server Url'
                        />
                        <CopyButton value={value} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default UrlCard