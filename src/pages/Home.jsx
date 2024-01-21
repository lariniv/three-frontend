import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";
import state from "../store/index";
import { CustomButton } from "../components/index";

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.div className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src="./threejs.png"
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                {"LET'S"}
                <br className="lg:block hidden" /> DO IT
              </h1>
            </motion.div>

            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-gray-600 text-bse">
                Create yout unique and exclusive shirt with our brand-new 3D{" "}
                customization tool. <strong>Unleash your imagination</strong>{" "}
                and define yout own style.
              </p>

              <CustomButton
                type={"filled"}
                title={"Customize it"}
                callbackFn={() => (state.intro = false)}
                className={"w-fit px-4 py-2.5 font-bold text-sm"}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Home;
