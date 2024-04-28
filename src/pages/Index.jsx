import { Box, Button, Container, Flex, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Header Section */}
      <Box bgGradient="linear(45deg, #F5A623FF 0%, #F8E71CFF 100%)" p={10}>
        <Heading textAlign="center" color="white" fontSize="1.6em" fontWeight="bold">
          غاتوصلك حتى لباب دارك😉
        </Heading>
      </Box>

      {/* Description and Image Section */}
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="center" p={10}>
        <Box flex="1" textAlign="center">
          <Heading fontSize="2.5em" color="white" bg="green.500" p={5}>
            تصميم رائع😍
          </Heading>
        </Box>
        <Box flex="1">
          <Image src="https://cdn.youcan.shop/stores/589ea88f2d49c91a650ce913036b1174/others/62PzgTnYPTQPDJvpn4eMLoZhlVHqlBND4SN0r3Ek.jpeg" borderRadius="30px" w="400px" />
        </Box>
      </Flex>

      {/* HTML Content */}
      <Box textAlign="center" p={5}>
        <Text fontSize="lg" color="gray.600">
          ✨تساعدك دعامة الركبة الطبية والرياضية للحماية والتخلص من الألم ✨تخلصكك من مشكل الإتهاب في الركبة والمفاصل عند ممارستك لأنشطتك اليومية
        </Text>
      </Box>

      {/* Order and Pay Section */}
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="center" p={10} bg="gray.100">
        <Image src="https://cdn.youcan.shop/stores/d30f24229ccf57f5714113acecc343f1/others/ZD6SJyB4LRJHbfZuQNPWbUt0ES9a5yXglJeePJqV.png" w="405px" />
        <Button leftIcon={<FaShoppingCart />} colorScheme="green" variant="solid" size="lg" mt={5} onClick={() => alert("Order placed!")}>
          أطلب الآن
        </Button>
      </Flex>

      {/* Footer */}
      <Box p={5} bg="green.500" color="white" textAlign="center">
        <Text fontSize="xl">جميع الحقوق محفوظة © 2023</Text>
      </Box>
    </Container>
  );
};

export default Index;
