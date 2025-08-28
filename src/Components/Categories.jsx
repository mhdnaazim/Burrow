import './Categories.css'

const Categories = () => {
    return (
        <>
            <div className="mods-container">
                <div className="mods-top">
                    <div className="mods-top-img">
                        <div className="mods-top-left"></div>
                    <div className="mods-top-right"></div>
                    </div>
                    <div className="mods-top-description">
                        <p>Modular Seating</p>
                        <p>Outdoor Essentials</p>
                    </div>
                </div>
                <div className="mods-bottom">
                    <div className="mods-bottom-left">
                        <div className="mods-bottom-left-img"></div>
                        <div className="mods-bottom-left-description">
                            <p>Clever Storage Solutions</p>
                        </div>
                    </div>
                    <div className="mods-bottom-mid">
                        <div className="mods-bottom-mid-img"></div>
                        <div className="mods-bottom-mid-description">
                            <p>Dining Chairs & Tables</p>
                        </div>
                    </div>
                    <div className="mods-bottom-right">
                        <div className="mods-bottom-right-img"></div>
                        <div className="mods-bottom-right-description">
                            <p>Sleeper Sofas</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Categories