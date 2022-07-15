


const Ocard= ({
   user,product_names,total_products,total_amount,created_at  }) => {


  

 

  return (
    <div className="card text-white bg-dark border border-info ">
      ORDERED products:<div1 className="card-header lead">{product_names}</div1>
      <div className="card-body">
       
      No.of products:<p className="lead bg-success font-weight-normal text-wrap">
         {total_products}                                            {/* Injecting the values from above variable we have defined */}

        </p>
        Amount :<p className="btn btn-success rounded  btn-sm px-4"> $ {total_amount}</p>
        placed at  < p className="btn btn-success rounded  btn-sm px-4">{created_at}</p>
      </div>
    </div>
  );
};

export default Ocard;