import { Button, Heading } from "@chakra-ui/react";

import CenteredCard from "~~/components/CenteredCard";
import ConnectedLayout from "~~/components/layouts/ConnectedLayout";
import { NextPageWithLayout } from "~~/pages/_app";

const NoTokenPage: NextPageWithLayout = () => {
  return (
    <>
      <CenteredCard>
        <Heading as="h1" size="4xl" textAlign="center" mb={2}>
          Join the party 🥳
        </Heading>

        <Heading as="h2" size="md" textAlign="center">
          You don&apos;t have a SPN DAO membership token yet
        </Heading>

        <Button mt={8} colorScheme="blue" size="lg">
          Join SPN DAO
        </Button>
      </CenteredCard>
    </>
  );
};

NoTokenPage.getLayout = function getLayout(page) {
  return <ConnectedLayout>{page}</ConnectedLayout>;
};

export default NoTokenPage;
