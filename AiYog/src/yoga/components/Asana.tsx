import Markdown from 'react-markdown'

const Asana = ({name, description, duration, schedule, status}: {name: any, description: string, duration: string, schedule: string, status: boolean}) => {
    return (
        <div className="flex gap-5">
            <div>
                {name}
            </div>
            <div>
                <div>{duration}</div>
                <Markdown>{description}</Markdown>
            </div>
        </div>
    )
} 

export default Asana;