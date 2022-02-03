import {FC} from "react"

type ComponentProps = {
    name: string
}

const Component: FC<ComponentProps> = ({name}) => {
    return <p>{name}</p>
}

export default Component
