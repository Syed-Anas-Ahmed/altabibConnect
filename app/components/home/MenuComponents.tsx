import React from "react";
import { XStack, YStack } from "tamagui";
import RowCard from "./RowCard";
import DocDetails from "./DocDetails";

const MenuComponents = () => {
  return (
    <YStack alignItems="center" gap={10} flex={1} justifyContent="center">
      <XStack width={"100%"} justifyContent="space-between" gap={10}>
        <RowCard
        bg="#00be9f"
        br="#00be9f"
          text="Find A Doctor"
          image={require("../../../assets/doctor.png")}
        />
        <RowCard br="#ffa600" bg="#ffa600" text="Laboratory" image={require("../../../assets/lab.png")} />
      </XStack>
      <DocDetails heading="Well Known Doctors" />
    </YStack>
  );
};

export default MenuComponents;
