"use client";

import { CSSProperties } from "styled-components";
import loading from "./loading.json";
import { Player } from "@lottiefiles/react-lottie-player";

type LottieName = "loading";

const LottieType: Record<LottieName, any> = {
  loading,
};

interface LottieProps {
  style?: CSSProperties;
  className?: string;
  name: LottieName;
}

export const Lottie = ({ style, name }: LottieProps) => {
  return <Player src={LottieType[name]} style={{ ...style }} autoplay loop />;
};
