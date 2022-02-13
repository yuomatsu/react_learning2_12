import { memo, VFC } from "react";
import { Wrap, WrapItem } from "@chakra-ui/react";

import { UserCard } from "../organisms/user/userCard";

export const UserManagement: VFC = memo(() => {
  return (
    <Wrap p={{ base: 4, md: 10 }}>
      <WrapItem>
        <UserCard
          imageUrl="https://source.unsplash.com/random"
          userName="おまつ"
          fullName="yu"
        ></UserCard>
      </WrapItem>
    </Wrap>
  );
});
