import React,{Component} from 'react';

class ShopVariantProductForm extends Component {

    addProduct = () => {
        const name = this.refs.name.value;
        const category = this.refs.category.value;
        const fullDesc = this.refs.fullDesc.value;
        const shortDesc = this.refs.shortDesc.value;
        const metaKeywords = this.refs.metaKeywords.value;
        const metaDesc = this.refs.metaDesc.value;
        const isPublished = this.refs.isPublished.checked;
        const data = {name: name,fullDescription: fullDesc,shortDescription: shortDesc,categoryId: category,
            shopVariantId: this.props.shopVariantId, metaKeywords: metaKeywords,
            metaDesc: metaDesc, published: isPublished};
        this.props.addProduct(data);
    }

    renderCategories(categories){
        return categories.map((category) => {
            return (
                <option key={category.id} value={category.id}>{category.name}</option>
            );
        });
    }
    render() {
        return (
            <div className="col-md-4">
                <p>Name</p>
                <input type="text" ref='name' placeholder="NAME"/>
                <p>Category</p>
                <select ref='category'>
                    {this.renderCategories(this.props.categories.categories)}
                });
                </select>
                <p>Full description</p>
                <textarea ref='fullDesc' placeholder="FULL DESCRIPTION"/>
                <p>Short description</p>
                <textarea ref='shortDesc' placeholder="SHORT DESCRIPTION"/>
                <p>Meta keywords</p>
                <textarea ref='metaKeywords' placeholder="META KEYWORDS"/>
                <p>Meta description</p>
                <textarea ref='metaDesc' placeholder="META DESCRIPTION"/>
                <div className="checkbox">
                    <label><input type="checkbox" ref='isPublished'/>Published</label>
                </div>
                <button className="btn btn-primary" onClick={this.addProduct}>Confirm</button>
                {this.props.error &&
                <p>{this.props.error}</p>
                }
            </div>
        )
    }
}

export default ShopVariantProductForm;

