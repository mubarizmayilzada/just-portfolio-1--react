import './productList.css';
import {Product} from '../product/Product';
import {products} from '../../data';

export const ProductList = () =>{
    return(
        <div className='pl'>
            <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. It's Marz</h1>
        <p className="pl-desc">
            Marz is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
      </div>
      <div className="pl-list">
        {
            products.map((item) => {
               return (<Product key={item.id} img={item.img} link={item.link} />)
            })
        }
      </div>
        </div>
    )
}