
import { useState } from "React";
import { AddCategory, GifGrid } from "./components";

const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Punch' ]);

  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return;
    setCategories([ newCategory, ...categories ])
  }


  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory 
        onNewCategory={ onAddCategory }
      />
      
      { categories.map((category, i) => (
          <GifGrid 
            key={category} 
            category={category} 
          />
        ))
      }
    </>
  )
}

export default GifExpertApp