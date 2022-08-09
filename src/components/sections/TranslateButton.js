import React, {Component} from "react";

class Translate extends Component{

    change(option) {
        localStorage.setItem('lang', option.target.value);
        window.location.reload();
      }


    render(){
        const lang = localStorage.getItem('lang') || 'es';
        return(
            <nav className="container mb-4 mt-4">
                <div className="row">
                <div className="col-2"></div>
                <div className="col-2">
                    <select className="custom-select pull-right" onChange={this.change} value={lang}>
                        <option value="es">Español</option>
                        <option value="en">English</option>
                    </select>
                </div>
                </div>
            </nav>
        )
    }
}

export default Translate;