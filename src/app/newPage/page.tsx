import { Box, Heading, Center, Stack, Button, Image, Text, Flex } from "@chakra-ui/react";

export default function newPage() {
  return (
    <>
    <Box width = "80%" maxWidth = "1200px" margin = "0 auto" background = "gray.100" borderRadius="30px" padding="10px" border = "gray.200" marginTop = "50px">
        <Center>
            <Stack justify="space-between" align="center" direction="row" width="100%" height="35px" padding="10px">
            <Image src = "/images/frame1.png" alt = "Frame1" width = "129px" height = "45px" />
            <Heading size="sm" fontFamily = "Inter" fontWeight = "600" fontSize = "20px" lineHeight = "20%" letterSpacing = "0%">Home</Heading>
            <Heading size="sm" fontFamily = "Inter" fontWeight = "600" fontSize = "20px" lineHeight = "20%" letterSpacing = "0%">Product</Heading>
            <Heading size="sm" fontFamily = "Inter" fontWeight = "600" fontSize = "20px" lineHeight = "20%" letterSpacing = "0%">Contact</Heading>
            <Heading size="sm" fontFamily = "Inter" fontWeight = "600" fontSize = "20px" lineHeight = "20%" letterSpacing = "0%" >Partner with us!</Heading>
            <Button borderRadius = "20px" width = "12%" fontSize = "15px">Get started</Button>
            </Stack>
        </Center>
    </Box>



    
    <Box background = "green.100" borderRadius = "25px" width = "93%" justifyContent = "center" margin = "0 auto" marginTop = "50px">
        <Box paddingLeft = "140px" paddingTop = "50px">
        <Text width = "531px" height = "165px" fontFamily = "Poppins" fontWeight = "500" fontSize = "50px" lineHeight = "55px" letterSpacing = "0%">
            Eco-Friendly Energy <br />
            Solution for a <br />
            Greener Tomorrow
        </Text>
        </Box>

        <Box paddingLeft = "140px" paddingTop = "20px">
        <Text width = "531px" height = "54px" fontFamily = "Poppins" fontWeight = "400" fontSize = "18px" lineHeight = "100%" letterSpacing = "0%">
            Discover renewable energy products designed to power <br />
            your home and business sustainably
        </Text>
        </Box>

        <Box marginLeft = "800px" marginTop = "-200px">
        <Image src = "/images/frame 5.png" alt = "Frame 5" width = "279px" height = "273px" position = "relative" right = "90px" top = "-20px" />
        </Box>

        <Box paddingLeft = "140px" position = "relative" top = "-60px">
        <Button borderRadius = "20px" width = "12%" fontSize = "15px" >Get started</Button>
        </Box>
    </Box>

   
    
    <Box paddingTop = "50px" paddingLeft = "150px">
    <Image src = "/images/f13.png" alt = "F13" width = "90&" height = "60%" />
    </Box>



    <Box background="#FDF2FF" borderRadius="25px" width="83%" margin = "0 auto" marginTop = "55px" padding = "50px 100px">
        <Box display = "flex" justifyContent = "space-between" alignItems = "center">
            <Box maxWidth = "50%">
            <Text fontFamily="Poppins" fontWeight="500" fontSize="50px" lineHeight="55px" mb="4">
                Solar Panels
            </Text>

            <Text fontFamily="Poppins" fontWeight="400" fontSize="18px" lineHeight="24px">
                High-efficiency panels to harness the power of the sun <br />
                and reduce your electric bills
            </Text>
            </Box>

            <Box maxWidth = "45%">
            <Image src="/images/f14.png" alt="F14" width="90%" height="60%" />
            </Box>
        </Box>
    </Box>
    


    <Box background = "green.100" borderRadius = "25px" width = "93%" justifyContent = "center" margin = "0 auto" marginTop = "50px">
        <Box position = "relative"display = "flex" justifyContent = "center" width = "100%">
        <Image src = "/images/f1.png" alt = "F1" width = "80%" maxWidth = "950px" height = "auto"  mb = "12" mt = "10" borderRadius = "20px" />
        </Box>

        <Box display = "flex" justifyContent = "center" alignItems = "center" marginTop = "-26px">
            <Box width = "40%" marginRight = "20px" marginBottom = "50px">
            <Image src = "/images/co.png" alt = "co" width = "100%" height = "60%" borderRadius = "20px"/>
            </Box>

            <Box width = "40%" marginBottom = "50px">
            <Image src = "/images/f3.png" alt = "f3" width = "100%" height = "60%" borderRadius = "20px"/>
            </Box>
        </Box>
    </Box>



    <Box display = "flex" justifyContent = "center" marginTop = "50px">
    <Image src = "/images/frame 9.png" alt = "Frame 9" width = "93%" maxHeight = "400px" height = "auto" mb = "12" borderRadius = "25px"/>
    </Box>


        
    <Box display = "flex" justifyContent = "center">
    <Image src = "/images/frame10.png" alt = "Frame10" width = "95%" maxHeight = "400px" height = "auto" mb = "12" />
    </Box>










    



    {/* <Box background = " #F4F7FE" >
        <Center>
            <Box marginTop = "50px" marginLeft = "-1000px">
            <Image src = "/images/frame1.png" alt = "Frame1" width = "90%" height = "60%" />
            </Box>
        </Center>
    

        <Box marginLeft = "70px" marginTop = "40px">
        <Image src = "/images/button.png" alt = "button" width = "10%" height = "50%" borderRadius = "30px"  />
        </Box>


        <Center py = "4" marginTop = "-130px">
          <Stack direction = "row" gap = "40" align = "flex-start">
            <Stack gap = "2" align = "flex-start">
            <Text fontWeight = "600" fontSize = "20px">Company</Text>
            <Text>Home</Text>
            <Text>About us</Text>
            <Text>Partner with us</Text>
            </Stack>

    
            <Stack gap = "2" align = "flex-start">
            <Text fontWeight = "600" fontSize = "20px">Products</Text>
            <Text>Eco Friendly</Text>
            <Text>Petroleum products</Text>
            <Text>EV Charging (coming soon)</Text>
            <Text>Service Technician (coming soon)</Text>
            </Stack>

    
            <Stack gap = "2" align = "flex-start">
            <Text fontWeight = "600" fontSize = "20px">Support</Text>
            <Text>Privacy Policy</Text>
            <Text>Terms</Text>
            <Text>Contact</Text>
            </Stack>

          </Stack>
        </Center>



        <Box display = "flex" justifyContent = "center">
        <Image src = "/images/frame 4.png" alt = "Frame 4" width = "8%" height = "8%" />
        </Box>



        <Image src = "/images/fuel.png" alt = "Fuel" width = "100%" height = "90%" />
    </Box> */}





    <Box background = "#F4F7FE">
                <Flex 
                  direction={{ base: "column", md: "row" }}
                  width="100%"
                  paddingX={{ base: "20px", md: "50px" }}
                  paddingY={{ base: "30px", md: "50px" }}
                  alignItems={{ base: "center", md: "flex-start" }}
                  justifyContent={{ md: "space-between" }}
                  flexWrap={{ md: "nowrap" }}
                  gap={{ md: "20px" }}>
       
                <Box width={{ base: "50%", md: "15%" }} marginBottom={{ base: "30px", md: "0" }} display="flex" flexDirection="column" alignItems={{ base: "center", md: "flex-start" }}>
                  <Image src="/images/frame1.png" alt="Frame1" width="100%" height="auto" marginBottom={{ base: "20px", md: "20px" }} />
        
                  <Image src="/images/button.png" alt="button" width={{ base: "60%", md: "70%" }} height="auto" borderRadius="30px"/>
                </Box>
    
        
                <Stack 
                  gap="2" 
                  align={{ base: "center", md: "flex-start" }} 
                  width={{ base: "100%", md: "18%" }}
                  marginBottom={{ base: "30px", md: "0" }}>
                    <Text fontWeight="600" fontSize={{ base: "18px", md: "20px" }}>Company</Text>
                    <Text>Home</Text>
                    <Text>About us</Text>
                    <Text>Partner with us</Text>
                </Stack>
    
       
                <Stack 
                  gap="2" 
                  align={{ base: "center", md: "flex-start" }} 
                  width={{ base: "100%", md: "28%" }}
                  marginBottom={{ base: "30px", md: "0" }}>
                    <Text fontWeight="600" fontSize={{ base: "18px", md: "20px" }}>Products</Text>
                    <Text>Eco Friendly</Text>
                    <Text>Petroleum products</Text>
                    <Text>EV Charging (coming soon)</Text>
                    <Text>Service Technician (coming soon)</Text>
                </Stack>
    
       
                <Stack 
                  gap="2" 
                  align={{ base: "center", md: "flex-start" }} 
                  width={{ base: "100%", md: "18%" }}>
                    <Text fontWeight="600" fontSize={{ base: "18px", md: "20px" }}>Support</Text>
                    <Text>Privacy Policy</Text>
                    <Text>Terms</Text>
                    <Text>Contact</Text>
                </Stack>
                </Flex>
    
    
                <Box display="flex" justifyContent="center" paddingY={{ base: "20px", md: "30px" }}>
                  <Image src="/images/frame 4.png" alt="Frame 4" width={{ base: "25%", sm: "20%", md: "12%", lg: "8%" }} height="auto"/>
                </Box>
    
                <Image src="/images/fuel.png" alt="Fuel" width="100%" height="auto" objectFit="cover" />
              </Box>

    </>
    
  );
}