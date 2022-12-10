import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { useCoffee } from '../../stores/coffee.store';

const Coffees = () => {
  const { getCoffees } = useCoffee();

  useEffect(() => {
    getCoffees();
  }, []);


  return (
    <div className="h-95" style={{ width: "90%" }}>
     <Outlet/>
    </div>
  );
};

export default Coffees;
