import kingImage from '../../src/assets/images/king.webp';
import bishopImage from '../../src/assets/images/bishop.png';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className=" bg-black text-white bg-[linear-gradient(to_bottom,#000,#241807,#38250a,#b7722d)] py-[72px] sm:py-24 relative overflow-clip">
      <div
        className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[786px] lg:h-[1200px] lg:w-[5400px] rounded-[100%] left-1/2 -translate-x-1/2 bg-black border-[#b7722d] 
      bg-[radial-gradient(closest-side,#000,#000,#32000,#b2722d)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"
      ></div>
      <div className="container relative">
        <div className=" flex items-center justify-center">
          <a href="" className=" border py-1 px-2 rounded-lg border-[#b7722d]">
            <span>Version 1.0 </span>
            <span>Coming Soon</span>
          </a>
        </div>
        <div className="flex justify-center mt-8">
          <div className=" inline-flex relative">
            <h1 className=" text-7xl sm:text-9xl font-bold tracking-tighter text-center  inline-flex">
              One Move <br /> at a Time
            </h1>
            <motion.div
              drag
              dragSnapToOrigin
              className=" absolute top-[108px] right-[476px] w-[300px] hidden sm:inline"
            >
              <img src={kingImage} alt="" draggable={false} />
            </motion.div>

            <motion.div drag dragSnapToOrigin className=" absolute top-[56px] left-[498px] w-[300px] hidden sm:inline">
              <img src={bishopImage} alt="" draggable={false} />
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center">
          <p className=" text-center text-xl mt-8 max-w-md">
            Experience Chess like Never Before: Play, Earn, and Shape the Future of the Game.
          </p>
        </div>
        <div className=" flex items-center justify-center mt-8">
          <button className=" bg-white text-black px-4 py-2 rounded-lg font-medium">Play Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;