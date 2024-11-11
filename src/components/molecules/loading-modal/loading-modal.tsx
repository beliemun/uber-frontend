import { AnimatePresence, motion } from "framer-motion";
import { LoadingModalProps } from "./types";
import { useEffect, useState } from "react";
import { useDarkModeStore } from "stores";
import { Loading } from "components/atoms/loading";
import { cn } from "common/utils";

export const LoadingModal = ({ loading = true, loadingMessage = undefined, onClose }: LoadingModalProps) => {
  const [visible, setVisible] = useState(true);
  const { isDarkMode } = useDarkModeStore();

  useEffect(() => {
    setVisible(loading);
    if (!loading) {
      setTimeout(() => {
        onClose?.();
      }, 500);
    }
  }, [loading, onClose]);

  console.log("visible", visible, loading);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.figure
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            backgroundColor: isDarkMode ? "rgba(30, 30, 30, 0.7)" : "rgba(230, 230, 230, 0.7)",
          }}
          className={cn(
            "fixed flex flex-col justify-center items-center w-full h-full min-h-screen",
            "top-0 left-0 bottom-0 right-0 m-auto gap-4 backdrop-blur-sm"
          )}
        >
          <Loading loadingMessage={loadingMessage} />
        </motion.figure>
      ) : null}
    </AnimatePresence>
  );
};
