import React, { useState } from 'react'

const Seletion = (props) => {
    const [Status, setStatus] = useState(true);
    const setform = () => {
        if (Status === true) {
            return (<div class="btn btn-group">
                <div class="btn btn-info" onClick={() => doitrangthai()}> edit</div>
                <div class="btn btn-warning">remove</div>
            </div>)
        }
        else return (<div classname="form-group">
            <input className="form-control" type="text" name="ten" />
            <div className="btn btn-primary" onClick={() => doitrangthai()}>Save</div>
        </div>);
    }
    const doitrangthai = () => {
        setStatus(!Status);
    }

    console.log(Status);
    return (
        <div>
            <section id="scroll">
                <div className="container px-5">
                    <div className="row gx-5 align-items-center">
                        <div className={"col-lg-6 " + props.vitri}>
                            <div className="p-5">
                                <img
                                    className="img-fluid rounded-circle"
                                    src={props.imageUrl}
                                    alt="..."
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1">

                            <div className="p-5">
                                <h2 className="display-4">{props.title}</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                                    aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam
                                    exercitationem, ea animi blanditiis recusandae! Ratione voluptatum
                                    molestiae adipisci, beatae obcaecati.
                                </p>

                                <div className="row">
                                    {setform()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Seletion
