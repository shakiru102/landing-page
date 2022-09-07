import { FC, useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css";

const Title: FC<{ title: string }> = ({
title
}) => {

  useEffect(() => {
    Aos.init({
      duration: 1000
    });
    Aos.refresh();
  }, []);

  return (
    <div>
      <div data-aos="fade-up" className='headertext'>{title}</div>
      <div data-aos="fade-up" className='subheadertext'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aliquam, ex architecto at quam, maiores velit reiciendis ratione, hic rerum sed. Repellat at </div>
    </div>
  )
}

export default Title