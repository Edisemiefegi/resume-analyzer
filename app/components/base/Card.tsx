interface Props {
    children?: React.ReactNode;
    className?: string
}
function Card({ children, className }: Props) {
    return (
        <div className={`${className} w-full p-2 bg-white rounded-md shadow-md`}>{children}</div>
    )
}

export default Card