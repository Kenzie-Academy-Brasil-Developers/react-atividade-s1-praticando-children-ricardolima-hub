import "./style.css"

function CenteredCard ({children}) {
    return (
        <div className="father">
            <span>{children}</span>
        </div>
    )
}

export default CenteredCard