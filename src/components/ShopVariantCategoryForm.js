import React,{Component} from 'react';

class ShopVariantCategoryForm extends Component {
    addCategory = () => {
        const name = this.refs.name.value;
        const desc = this.refs.desc.value;
        const metaKeywords = this.refs.metaKeywords.value;
        const metaDesc = this.refs.metaDesc.value;
        const isPublished = this.refs.isPublished.checked;
        const data = {name: name,desc: desc, metaKeywords: metaKeywords,metaDesc: metaDesc, published: isPublished};
        this.props.addCategory(data);
    }


    render() {
        return (
            <div className="col-md-4">
                <p>Name</p>
                <input type="text" ref='name' placeholder="NAME"/>
                <p>Description</p>
                <textarea ref='desc' placeholder="DESCRIPTION"/>
                <p>Meta keywords</p>
                <textarea ref='metaKeywords' placeholder="META KEYWORDS"/>
                <p>Meta description</p>
                <textarea ref='metaDesc' placeholder="META DESCRIPTION"/>
                <div className="checkbox">
                    <label><input type="checkbox" ref='isPublished'/>Published</label>
                </div>
                <button className="btn btn-primary" onClick={this.addCategory}>Confirm</button>
                {this.props.error &&
                <p>{this.props.error}</p>
                }
            </div>
        )
    }
}

export default ShopVariantCategoryForm;

