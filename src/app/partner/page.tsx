"use client"

import {Image, Center, Text, Box, Stack, Heading, Button, Field, Input, Link, Flex, Icon, SimpleGrid,} from "@chakra-ui/react"
import { FaApple, FaGooglePlay } from 'react-icons/fa';

export default function partner() {
    return(
        <>
        {/* <Box width = "80%" maxWidth = "1200px" margin = "0 auto" background = "gray.100" borderRadius="30px" padding="10px" border = "gray.200" marginTop = "50px" direction = {["column", "column", "row"]}>
            <Center>
                <Stack justify="space-between" align="center" direction="row" width="100%" height="35px" padding="10px">
                    <Image src = "/images/frame1.png" alt = "Frame1" width = "129px" height = "45px" />
                    <Link href = "/page"><Heading size="sm" fontFamily = "Inter" fontWeight = "600" fontSize = "20px" lineHeight = "20%" letterSpacing = "0%">Home</Heading></Link>
                    <Link href = "/product"><Heading size="sm" fontFamily = "Inter" fontWeight = "600" fontSize = "20px" lineHeight = "20%" letterSpacing = "0%">Product</Heading></Link>
                    <Link href = "/contact"><Heading size="sm" fontFamily = "Inter" fontWeight = "600" fontSize = "20px" lineHeight = "20%" letterSpacing = "0%">Contact</Heading></Link>
                    <Heading size="sm" fontFamily = "Inter" fontWeight = "600" fontSize = "20px" lineHeight = "20%" letterSpacing = "0%" color = "red.600">Partner with us!</Heading>
                    <Button borderRadius = "20px" width = "12%" fontSize = "15px">Get started</Button>
                </Stack>
            </Center>
        </Box> */}



        <Box width="90%" maxW="1200px" mx="auto" bg="gray.100" borderRadius="30px" p="10px" border="1px solid" borderColor="gray.200" mt="50px">
            <Center>
                <Stack
                    direction={["column", "column", "row"]}
                    justify="space-between"
                    align="center"
                    gap={["20px", "20px", "0px"]}
                    width="100%"
                    flexWrap="wrap">
                    <Image src="/images/frame1.png" alt="Frame1" width={["100px", "110px", "129px"]} height="auto"/>

                    <Link href="/page"><Heading fontFamily="Inter" fontWeight="600" fontSize={["18px", "18px", "20px"]} lineHeight="1"> Home </Heading></Link>
                    <Link href="/product"><Heading fontFamily="Inter" fontWeight="600" fontSize={["18px", "18px", "20px"]} lineHeight="1"> Product </Heading></Link>
                    <Link href="/contact"><Heading fontFamily="Inter" fontWeight="600" fontSize={["18px", "18px", "20px"]} lineHeight="1"> Contact </Heading></Link>
                    <Heading fontFamily="Inter" fontWeight="600" fontSize={["18px", "18px", "20px"]} lineHeight="1" color="red.600"> Partner with us! </Heading>
                    <Button borderRadius="20px" width={["100%", "auto", "12%"]} fontSize={["14px", "15px"]}> Get started </Button>
                </Stack>
            </Center>
        </Box>



{/* 
        <Box background = "#EFF4FF" borderRadius="25px" width="93%" margin = "0 auto" marginTop = "55px" padding = "50px 100px">
            <Box display = "flex" justifyContent = "space-between" alignItems = "center">
                <Box maxWidth = "50%">
                    <Text width = "531px" height = "110px" fontFamily = "Poppins" fontWeight = "500" fontSize = "50px" lineHeight = "55px" letterSpacing = "0%" mb = "10px">
                        Together, We Can Do <br /> More
                    </Text>
                
                    <Text width = "531px" height = "108px" fontFamily = "Poppins" fontWeight = "400" fontSize = "18px" lineHeight = "100%" letterSpacing = "0%">
                        When you partner with FuelFinder, you are joining a <br />
                        community that is passionate about innovation, <br />
                        sustainability and making life easier for everyone. Let's <br />
                        grow your business and create real impact.
                    </Text>
                </Box>
                
                <Box maxWidth = "45%">
                    <Image src="/images/i4.png" alt="i4" width="90%" height="60%" />
                </Box>

            </Box>

            <Box paddingLeft = "2px" position = "relative" top = "-30px">
                <Button borderRadius = "20px" width = "15%" fontSize = "15px" >Get started</Button>
            </Box>
        </Box> */}



        <Box
            background="#EFF4FF"
            borderRadius="25px"
            width="93%"
            margin="0 auto"
            marginTop="55px"
            padding={["30px 20px", "40px 40px", "50px 60px", "50px 100px"]}>
            <Flex
                direction={["column", "column", "row"]}
                justify="space-between"
                align="center"
                gap="30px">
                <Box maxW={["100%", "100%", "50%"]}>
                    <Text
                        fontFamily="Poppins"
                        fontWeight="500"
                        fontSize={["30px", "36px", "45px", "50px"]}
                        lineHeight={["40px", "45px", "50px", "55px"]}
                        mb="10px">
                            Together, We Can Do <br /> More
                    </Text>

                    <Text
                        fontFamily="Poppins"
                        fontWeight="400"
                        fontSize={["16px", "16px", "18px"]}
                        lineHeight="140%">
                            When you partner with FuelFinder, you are joining a <br />
                            community that is passionate about innovation, <br />
                            sustainability and making life easier for everyone. Let's <br />
                            grow your business and create real impact.
                    </Text>
                </Box>

                <Box maxW={["100%", "100%", "45%"]}>
                    <Image src="/images/i4.png" alt="i4" width="100%" height="auto" />
                </Box>
            </Flex>

            <Box mt={["30px", "40px"]} textAlign={["center", "left"]}>
                <Button
                    borderRadius="20px"
                    width={["50%", "30%", "20%", "15%"]}
                    fontSize="15px">
                        Get started
                </Button>
            </Box>
        </Box>



       
        {/* <Center>
            <Box display = "flex" flexDirection = "row" justifyContent = "center" alignItems = "stretch" gap = "20px" marginTop = "50px">
    
                <Box background = "#003399" borderRadius = "30px" textAlign = "center" padding = "30px 20px" width = "320px" minHeight = "360px" display = "flex" flexDirection = "column" justifyContent = "space-between">
                    <Text fontFamily = "Poppins" fontWeight = "500" fontSize = "24px" lineHeight = "40px" color = "white">
                        Expand Your Reach
                    </Text>

                    <Text fontFamily = "Poppins" fontWeight = "400" fontSize = "16px" lineHeight = "24px" color = "white" marginTop = "10px">
                        Your business, front and center. With <br />
                        thousands of users searching daily, we will <br />
                        help you attract a wider audience who <br />
                        need your services—fast.
                    </Text>

                    <Box maxWidth = "80%" margin = "20px auto 0 auto">
                        <Image src = "/images/i5.png" alt = "i5" width = "100%" />
                    </Box>
                </Box>

   
                <Box background = "#F79F48" borderRadius = "30px" textAlign = "center" padding = "30px 20px" width = "320px" minHeight = "360px" display = "flex" flexDirection = "column" justifyContent = "space-between">
                    <Text fontFamily = "Poppins" fontWeight = "500" fontSize = "24px" lineHeight = "40px" color = "white">
                        Drive Sustainable Growth
                    </Text>

                    <Text fontFamily = "Poppins" fontWeight = "400" fontSize = "16px" lineHeight = "24px" color = "white" marginTop = "10px">
                        Join the renewable energy revolution and <br />
                        position your business as a future-ready <br />
                        leader. Together, we will make eco-friendly <br />
                        energy accessible for everyone.
                    </Text>

                    <Box maxWidth = "80%" margin = "20px auto 0 auto">
                        <Image src="/images/i6.png" alt="i6" width="100%" />
                    </Box>
                </Box>


                <Box background = "#970706" borderRadius = "30px" textAlign = "center" padding = "30px 20px" width = "320px" minHeight = "360px" display = "flex" flexDirection = "column" justifyContent = "space-between">
                    <Text fontFamily = "Poppins" fontWeight = "500" fontSize = "24px" lineHeight = "40px" color = "white">
                        Boost Your Brand Visibility
                    </Text>

                    <Text fontFamily = "Poppins" fontWeight = "400" fontSize = "16px" lineHeight = "24px" color = "white" marginTop = "10px">
                        FuelFinder is not just a platform—it is a <br />
                        community. Get featured on our <br />
                        homepage, newsletter and our social <br />
                        channels to grow your brand presence <br />
                        effortlessly.
                    </Text>

                    <Box maxWidth = "80%" margin = "20px auto 0 auto" >
                        <Image src = "/images/i7.png" alt = "i7" width = "100%" />
                    </Box>
                </Box>
            </Box>
        </Center> */}




        <Center>
            <Flex
                direction={["column", "column", "row"]}
                justify="center"
                align="stretch"
                gap={["30px", "30px", "20px"]}
                mt="50px"
                flexWrap="wrap">
   
                <Box
                    background="#003399"
                    borderRadius="30px"
                    textAlign="center"
                    padding={["20px", "25px", "30px 20px"]}
                    width={["90%", "80%", "320px"]}
                    minHeight="360px"
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    mx="auto">
                    <Text
                        fontFamily="Poppins"
                        fontWeight="500"
                        fontSize={["20px", "22px", "24px"]}
                        lineHeight="40px"
                        color="white">
                            Expand Your Reach
                    </Text>

                    <Text
                        fontFamily="Poppins"
                        fontWeight="400"
                        fontSize={["14px", "15px", "16px"]}
                        lineHeight="24px"
                        color="white"
                        mt="10px">
                            Your business, front and center. With <br />
                            thousands of users searching daily, we will <br />
                            help you attract a wider audience who <br />
                            need your services—fast.
                    </Text>

                    <Box maxW="80%" mt="20px" mx="auto">
                        <Image src="/images/i5.png" alt="i5" width="100%" />
                    </Box>
                </Box>

    
                <Box
                    background="#F79F48"
                    borderRadius="30px"
                    textAlign="center"
                    padding={["20px", "25px", "30px 20px"]}
                    width={["90%", "80%", "320px"]}
                    minHeight="360px"
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    mx="auto">
                    <Text
                        fontFamily="Poppins"
                        fontWeight="500"
                        fontSize={["20px", "22px", "24px"]}
                        lineHeight="40px"
                        color="white">
                            Drive Sustainable Growth
                    </Text>

                    <Text
                        fontFamily="Poppins"
                        fontWeight="400"
                        fontSize={["14px", "15px", "16px"]}
                        lineHeight="24px"
                        color="white"
                        mt="10px">
                            Join the renewable energy revolution and <br />
                            position your business as a future-ready <br />
                            leader. Together, we will make eco-friendly <br />
                            energy accessible for everyone.
                    </Text>

                    <Box maxW="80%" mt="20px" mx="auto">
                        <Image src="/images/i6.png" alt="i6" width="100%" />
                    </Box>
                </Box>

   
                <Box
                    background="#970706"
                    borderRadius="30px"
                    textAlign="center"
                    padding={["20px", "25px", "30px 20px"]}
                    width={["90%", "80%", "320px"]}
                    minHeight="360px"
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    mx="auto">
                    <Text
                        fontFamily="Poppins"
                        fontWeight="500"
                        fontSize={["20px", "22px", "24px"]}
                        lineHeight="40px"
                        color="white">
                            Boost Your Brand Visibility
                    </Text>

                    <Text
                        fontFamily="Poppins"
                        fontWeight="400"
                        fontSize={["14px", "15px", "16px"]}
                        lineHeight="24px"
                        color="white"
                        mt="10px">
                            FuelFinder is not just a platform—it is a <br />
                            community. Get featured on our <br />
                            homepage, newsletter and our social <br />
                            channels to grow your brand presence <br />
                            effortlessly.
                    </Text>

                    <Box maxW="80%" mt="20px" mx="auto">
                        <Image src="/images/i7.png" alt="i7" width="100%" />
                    </Box>
                </Box>
            </Flex>
        </Center>






        <Box textAlign = "center" marginTop = "50px">
            <Text fontFamily = "Ubuntu" fontWeight="500" fontSize="55px" lineHeight="100%" letterSpacing="0%"  marginBottom = "20px">
                Ready to Join the <br />
                Movement?</Text>

            <Text fontFamily="Poppins" fontWeight="400" fontSize="24px" lineHeight="100%" letterSpacing="0%">
                Fill out the form below, and let's start building something <br />
                amazing together!
            </Text>
        </Box>


 

        <Box width = "80%" borderRadius = "35px" backgroundColor = "#FFFFFF" margin = "0 auto" padding = "2rem">
            <SimpleGrid columns={{ base: 1, md: 2 }} gap ="1.5rem">
                <Field.Root>
                    <Field.Label>Full Name</Field.Label>
                    <Input placeholder="What should we call you?" />
                </Field.Root>

                <Field.Root>
                    <Field.Label>Email Address</Field.Label>
                    <Input placeholder="Where should we reply you?" />
                </Field.Root>

                <Field.Root>
                    <Field.Label>Business Type</Field.Label>
                    <Input placeholder="Select business type" />
                </Field.Root>

                <Field.Root>
                    <Field.Label>Business/Company Name</Field.Label>
                    <Input placeholder="Your company name?" />
                </Field.Root>

                <Field.Root>
                    <Field.Label>Phone Number</Field.Label>
                    <Input placeholder="How can we call you?" />
                </Field.Root>

                <Field.Root>
                    <Field.Label>Location</Field.Label>
                    <Input placeholder="Where are you based?" />
                </Field.Root>
            </SimpleGrid>

            <Field.Root marginTop = "20px">
                <Field.Label>Tell Us About Your Business</Field.Label>
                <Input placeholder = "What do you do? How can we collaborate?" />
            </Field.Root>

            <Box paddingLeft = "5px" position = "relative" top = "30px">
                <Button borderRadius = "20px" width = "100%" fontSize = "15px">Send Message</Button>
            </Box>
        </Box>




        <Box 
            background="#003399" 
            marginLeft={{ base: "10px", sm: "20px", md: "50px" }} 
            width={{ base: "95%", md: "93%" }} 
            height="100%" 
            borderRadius="25px" 
            padding={{ base: "20px", sm: "30px", md: "40px" }} 
            position="relative" 
            overflow="hidden" 
            marginBottom="50px"
            marginTop="50px">
         
            <Box 
                width="100%" 
                display="flex" 
                justifyContent="flex-start" 
                marginBottom={{ base: "15px", md: "30px" }} 
                marginTop={{ base: "0", md: "-10px" }}>
                  <Image src="/images/i10.png" alt="i10" width={{ base: "30px", md: "40px" }} height="auto"/>
            </Box>
          
            <Text 
                fontFamily="Poppins" 
                fontWeight="500" 
                fontSize={{ base: "28px", sm: "35px", md: "42px", lg: "50px" }} 
                lineHeight={{ base: "120%", md: "59px" }} 
                letterSpacing="0%" 
                color="white"
                position="relative"
                zIndex="2">
                  <Text as="span" color="yellow.500">
                    Trusted by </Text>Movers, 
                    <Box as="br" display={{ base: "none", md: "inline" }} />
                    Shakers,
                    <Text as="span" color="yellow.500"> and </Text> 
                    <Box as="br" display={{ base: "none", md: "inline" }} />
                    Planet Savers!
            </Text>
          
         
            <Box 
                position="absolute" 
                top={{ base: "30%", md: "-40px" }} 
                right={{ base: "-30%", sm: "-15%", md: "10px" }} 
                width={{ base: "120%", sm: "100%", md: "100%" }} 
                height="auto">
                    <Image src="/images/i17.png" alt="i17" width="100%" height="auto" />
            </Box>
          
        
            <Box 
                position="absolute" 
                top={{ base: "30%", md: "-40px" }} 
                right={{ base: "-30%", sm: "-15%", md: "10px" }} 
                width={{ base: "120%", sm: "100%", md: "100%" }} 
                height="auto">
                    <Image src="/images/i18.png" alt="i18" width="100%" height="auto" zIndex={1} opacity={0.15}/>
            </Box>
        </Box>
        




        {/* <Box width = "100%" background="linear-gradient(88.81deg, rgba(255, 230, 142, 0) -0.15%, #F3F8FF 33.24%, #FFFFFF 64.13%, #F4F9FF 78.87%, #F8F3E7 109.42%)" textAlign = "center" marginBottom = "50px"  px="20px" py="30px">
            <Text fontFamily="Ubuntu" fontWeight="500" fontSize="55px" lineHeight="100%" letterSpacing="0%" marginBottom = "20px">
                Ready to Join the Energy <br/>
                Revolution?
            </Text>
                        
            <Text fontFamily="Poppins" fontWeight="400" fontSize="24px" lineHeight="100%" letterSpacing="0%" marginBottom = "30px">
                Take the first step to a sustainable and efficient future. <br />
                Explore our renewable energy solutions today.
            </Text>
                        
            <Flex  gap="20px" mb = "40px">
                <Button borderRadius="40px" width = "20%" height = "auto" size = "lg" padding = "12px" marginLeft = "400px">
                    <Icon as={FaApple} boxSize="10" color="white"/>
                    <Text>Download on the <br />
                        App Store
                    </Text>
                </Button>
                        
                <Button  borderRadius="40px" width = "20%" height = "auto" size = "lg" padding = "12px">
                    <Icon as={FaGooglePlay} boxSize="10" color="white"/>
                    <Text>
                        Google Play
                    </Text>
                </Button>
            </Flex>
        </Box> */}




        <Box 
          width="100%" 
          background="linear-gradient(88.81deg, rgba(255, 230, 142, 0) -0.15%, #F3F8FF 33.24%, #FFFFFF 64.13%, #F4F9FF 78.87%, #F8F3E7 109.42%)" 
          textAlign="center" 
          marginBottom="50px"
          px={{ base: "20px", md: "40px" }} 
          py={{ base: "30px", md: "40px" }}>
            <Text 
              fontFamily="Ubuntu" 
              fontWeight="500" 
              fontSize={{ base: "28px", sm: "36px", md: "45px", lg: "55px" }} 
              lineHeight="110%" 
              letterSpacing="0%" 
              marginBottom={{ base: "15px", md: "20px" }}>
                Ready to Join the Energy
              <Box as="br" display={{ base: "none", md: "block" }} />
              {" Revolution?"}
            </Text>
  
            <Text 
              fontFamily="Poppins" 
              fontWeight="400" 
              fontSize={{ base: "16px", sm: "18px", md: "20px", lg: "24px" }} 
              lineHeight={{ base: "130%", md: "110%" }} 
              letterSpacing="0%" 
              marginBottom={{ base: "25px", md: "30px" }}
              px={{ base: "0", md: "20px" }}>
                Take the first step to a sustainable and efficient future.
              <Box as="br" display={{ base: "none", md: "block" }} />
              {" Explore our renewable energy solutions today."}
            </Text>
  
            <Flex 
              flexDirection={{ base: "column", sm: "row" }} 
              justifyContent={{ base: "center", sm: "center" }} 
              alignItems="center" 
              gap={{ base: "15px", md: "20px" }} 
              mb="40px"
              width="100%">
                <Button 
                  borderRadius="40px" 
                  width={{ base: "80%", sm: "40%", md: "30%", lg: "20%" }} 
                  height="auto" 
                  size="lg" 
                  padding={{ base: "10px", md: "12px" }}
                  marginLeft={{ base: "0", sm: "0", md: "0", lg: "0" }}>
                    <Icon as={FaApple} boxSize={{ base: "6", md: "8", lg: "10" }} color="white" marginRight="2" />
                    <Text fontSize={{ base: "sm", md: "md" }}>
                      Download on the <br />
                      App Store
                    </Text>
                </Button>
    
                <Button 
                  borderRadius="40px" 
                  width={{ base: "80%", sm: "40%", md: "30%", lg: "20%" }} 
                  height="auto" 
                  size="lg" 
                  padding={{ base: "10px", md: "12px" }}>
                    <Icon as={FaGooglePlay} boxSize={{ base: "6", md: "8", lg: "10" }} color="white" marginRight="2" />
                    <Text fontSize={{ base: "sm", md: "md" }}>
                      Google Play
                    </Text>
                </Button>
            </Flex>
        </Box>
                



        {/* <Box background = " #F4F7FE" >
            <Center>
                <Box marginTop = "50px" marginLeft = "-1000px">
                    <Image src = "/images/frame1.png" alt = "Frame1" width = "90%" height = "60%" />
                </ Box>
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


            <Box display = "flex" justifyContent = "center" >
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
    )
}