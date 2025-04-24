"use client"

import {Image, Center, Text, Box, Stack, Heading, Button, Field, Input, Textarea, Icon, Flex, Accordion, Span, Link} from "@chakra-ui/react"
import { FaApple, FaGooglePlay,FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';


const items = [
    { value: "a", title: "How do i find the nearest fuel station?", text: "You can always check your google map" },
    { value: "b", title: "What renewable energy products do you offer?", text: "Yes, we do" },
    { value: "c", title: "Can i become a partner with FuelFinder?", text: "Ofcourse" },
    { value: "d", title: "Do you offer EV charging solutions?", text: "Yes, we do" },
    { value: "e", title: "How can i get in touch customer support?", text: "You can send us a message" },
    { value: "f", title: "Are your service available nationwide?", text: "Yes, it is" },
  ]

export default function Contact() {
    return(
        <>
        {/* <Box width = "80%" maxWidth = "1200px" margin = "0 auto" background = "gray.100" borderRadius="30px" padding="10px" border = "gray.200" marginTop = "50px">
        <Center>
          <Stack justify="space-between" align="center" direction="row" width="100%" height="35px" padding="10px">
            <Image src = "/images/frame1.png" alt = "Frame1" width = "129px" height = "45px" />
            <Link href = "/page"><Heading size="sm" fontFamily = "Inter" fontWeight = "600" fontSize = "20px" lineHeight = "20%" letterSpacing = "0%">Home</Heading></Link>
            <Link href = "/product"><Heading size="sm" fontFamily = "Inter" fontWeight = "600" fontSize = "20px" lineHeight = "20%" letterSpacing = "0%">Product</Heading></Link>
            <Heading size="sm" fontFamily = "Inter" fontWeight = "600" fontSize = "20px" lineHeight = "20%" letterSpacing = "0%" color = "red.600" >Contact</Heading>
            <Link href = "/partner"><Heading size="sm" fontFamily = "Inter" fontWeight = "600" fontSize = "20px" lineHeight = "20%" letterSpacing = "0%" >Partner with us!</Heading></Link>
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
        
                    <Link href="/page"><Heading fontFamily="Inter" fontWeight="600" fontSize={["18px", "18px", "20px"]} lineHeight="0"> Home </Heading></Link>
                    <Link href="/product"><Heading fontFamily="Inter" fontWeight="600" fontSize={["18px", "18px", "20px"]} lineHeight="0"> Product </Heading></Link>
                    <Heading fontFamily="Inter" fontWeight="600" fontSize={["18px", "18px", "20px"]} lineHeight="0"  color="red.600"> Contact </Heading>
                    <Link href="/product"><Heading fontFamily="Inter" fontWeight="600" fontSize={["18px", "18px", "20px"]} lineHeight="1"> Partner with us! </Heading></Link>
                    <Button borderRadius="20px" width={["100%", "auto", "12%"]} fontSize={["14px", "15px"]}> Get started </Button>
                </Stack>
            </Center>
        </Box>
        



        <Box display = "flex" justifyContent = "center" position = "relative" marginTop = "30px">
            <Image src="/images/i1.png" alt="i1" width="14%" height="18%" />
        </Box>





        <Center px="4">
            <Box>
                <Text
                    width={["100%", "90%", "620px"]}
                    fontFamily="Ubuntu"
                    fontWeight="500"
                    fontSize={["32px", "40px", "50px"]}
                    lineHeight={["38px", "45px", "55px"]}
                    textAlign="center"
                    mx="auto"
                    mb="4">
                        Let's Connect! We are <br />
                        Here for You.
                </Text>

                <Text
                    width={["100%", "90%", "762px"]}
                    fontFamily="Poppins"
                    fontWeight="400"
                    fontSize={["16px", "20px", "24px"]}
                    lineHeight="140%"
                    textAlign="center"
                    mx="auto">
                        Got questions, feedback or just wanna say hi? Slide into our <br />
                        inbox or hit us up—your FuelFinder fam is always ready to help!
                </Text>
            </Box>
        </Center>




        {/* <Center>
            <Box width = "35%" borderRadius = "35px" backgroundColor = "#FFFFFF">
                <Box marginBottom = "1rem">
                    <Field.Root>
                        <Field.Label>Full Name</Field.Label>
                            <Input placeholder = "what should we call you?" />
                    </Field.Root>
                </Box>

                <Box marginBottom = "1rem">
                    <Field.Root>
                        <Field.Label>Email</Field.Label>
                            <Input placeholder = "where should we reply you?" />
                    </Field.Root>
                </Box>

                <Field.Root>
                    <Field.Label>Message</Field.Label>
                        <Textarea placeholder = "talk to us" />
                </Field.Root>

                <Box paddingLeft = "5px" position = "relative" top = "30px">
                    <Button borderRadius = "20px" width = "100%" fontSize = "15px">Send Message</Button>
                </Box>
            </Box>
        </Center> */}



        <Center>
          <Box 
            width={["90%", "70%", "50%", "35%"]} 
            borderRadius="35px" 
            backgroundColor="#FFFFFF"
            p={[4, 6, 8]}>
              <Box marginBottom="1rem">
                <Field.Root>
                  <Field.Label fontSize={["sm", "md"]}>Full Name</Field.Label>
                  <Input placeholder="what should we call you?" size={["sm", "md"]} />
                </Field.Root>
              </Box>
    
              <Box marginBottom="1rem">
                <Field.Root>
                  <Field.Label fontSize={["sm", "md"]}>Email</Field.Label>
                  <Input placeholder="where should we reply you?" size={["sm", "md"]} />
                </Field.Root>
              </Box>
    
              <Field.Root>
                <Field.Label fontSize={["sm", "md"]}>Message</Field.Label>
                <Textarea placeholder="talk to us" size={["sm", "md"]} />
              </Field.Root>
    
              <Box paddingLeft="5px" position="relative" top="30px" mt={[2, 4]}>
                <Button borderRadius="20px" width="100%" fontSize={["13px", "15px"]} py={[2, 3]}>Send Message</Button>
              </Box>
          </Box>
        </Center>




        {/* <Center marginTop="70px">
            <Box width="90%">
                <Box display = "flex" justifyContent = "center" alignItems = "center" gap = "40px">
                    <Box maxWidth = "800px" textAlign = "center">
                        <Text fontFamily="Ubuntu" fontWeight="500" fontSize="50px" lineHeight="55px">
                            Got Questions? We have <br />
                            Got Answers
                        </Text>

                        <Text fontFamily="Poppins" fontWeight="400" fontSize="24px" lineHeight="32px" marginTop="20px">
                            Before you hit us up, check out this frequently asked questions.We <br />
                            might already have the answers you are looking for!
                        </Text>
                    </Box>

                    <Box>
                        <Image src="/images/i2.png" alt="i2" width = "130px" height = "auto" marginTop = "-110px"/>
                    </Box>
                </Box>
            </Box>
        </Center> */}




        <Center mt={{ base: "40px", lg: "70px" }} px={{ base: 4, md: 8 }}>
          <Box width="100%">
            <Box
              display="flex"
              flexDirection={{ base: "column", lg: "row" }}
              justifyContent="center"
              alignItems="center"
              gap={{ base: "20px", lg: "40px" }}>
                <Box maxWidth="800px" textAlign="center">
                  <Text
                    fontFamily="Ubuntu"
                    fontWeight="500"
                    fontSize={{ base: "30px", md: "40px", lg: "50px" }}
                    lineHeight={{ base: "36px", md: "44px", lg: "55px" }}>
                      Got Questions? We have <br />
                      Got Answers
                  </Text>

                  <Text
                    fontFamily="Poppins"
                    fontWeight="400"
                    fontSize={{ base: "16px", md: "20px", lg: "24px" }}
                    lineHeight={{ base: "24px", md: "28px", lg: "32px" }}
                    mt={{ base: "16px", lg: "20px" }}>
                      Before you hit us up, check out this frequently asked questions. We <br />
                      might already have the answers you are looking for!
                  </Text>
                </Box>

                <Box mt={{ base: 4, lg: "-110px" }}>
                  <Image src="/images/i2.png" alt="i2" boxSize={{ base: "100px", md: "120px", lg: "130px" }} height="auto" mx="auto"/>
                </Box>
            </Box>
          </Box>
        </Center>






        {/* <Center gap = "5" marginTop = "50px">
            <Box background = "gray.100" width = "15%" height = "auto" borderRadius = "15px">
            <Icon as={FaTwitter} boxSize="6" color="#003399" marginLeft = "30px" marginTop = "10px"/>
            <Text fontFamily="Poppins" fontWeight="500" fontSize="30px" lineHeight="100%"  marginLeft = "30px" marginTop = "20px">
                Twitter
            </Text>

            <Text marginLeft = "30px" marginTop = "20px"  marginBottom = "10px" fontFamily="Poppins" fontWeight="500" fontSize="18px">
                <Link href = "/follow" color = "#003399">
                    Follow
                </Link>
            </Text>
            </Box>

            <Box background = "gray.100" width = "15%" height = "auto" borderRadius = "15px">
            <Icon as={FaFacebook} boxSize="6" color="#003399" marginLeft = "30px"  marginTop = "10px"/>
            <Text fontFamily="Poppins" fontWeight="500" fontSize="30px" lineHeight="100%" marginLeft = "30px" marginTop = "20px">
                Facebook
            </Text>

            <Text marginLeft = "30px" marginTop = "20px"  marginBottom = "10px" fontFamily="Poppins" fontWeight="500" fontSize="18px">
                <Link href = "/follow" color = "#003399">
                    Follow
                </Link>
            </Text>
            </Box>

            <Box background = "gray.100" width = "15%" height = "auto" borderRadius = "15px">
            <Icon as={FaInstagram} boxSize="6" color="#003399" marginLeft = "30px"  marginTop = "10px"/>
            <Text fontFamily="Poppins" fontWeight="500" fontSize="30px" lineHeight="100%" marginLeft = "30px" marginTop = "20px">
                Instagram
            </Text>

            <Text marginLeft = "30px" marginTop = "20px"  marginBottom = "10px" fontFamily="Poppins" fontWeight="500" fontSize="18px">
                <Link href = "/follow" color = "#003399">
                    Follow
                </Link>
            </Text>
            </Box>

            <Box background = "gray.100" width = "15%" height = "auto" borderRadius = "15px">
            <Icon as={FaLinkedin} boxSize="6" color="#003399" marginLeft = "30px"  marginTop = "10px"/>
            <Text fontFamily="Poppins" fontWeight="500" fontSize="30px" lineHeight="100%" marginLeft = "30px" marginTop = "20px">
                Linkedin
            </Text>

            <Text marginLeft = "30px" marginTop = "20px" marginBottom = "10px" fontFamily="Poppins" fontWeight="500" fontSize="18px">
                <Link href = "/follow" color = "#003399">
                    Follow
                </Link>
            </Text>
            </Box>
        </Center> */}



        <Center 
          gap={[2, 3, 4, 5]} 
          marginTop={["30px", "40px", "50px"]} 
          flexDirection={["column", "column", "row"]}>
 
            <Box background="gray.100" width={["80%", "60%", "30%", "15%"]} height="auto" borderRadius="15px" p={[3, 4]}>
              <Icon as={FaTwitter} boxSize={[4, 5, 6]} color="#003399" marginLeft={["20px", "25px", "30px"]} marginTop="10px"/>
              <Text 
                fontFamily="Poppins" 
                fontWeight="500" 
                fontSize={["24px", "26px", "30px"]} 
                lineHeight="100%" 
                marginLeft={["20px", "25px", "30px"]} 
                marginTop="20px">
                  Twitter
              </Text>

              <Text 
                marginLeft={["20px", "25px", "30px"]} 
                marginTop="20px" 
                marginBottom="10px" 
                fontFamily="Poppins" 
                fontWeight="500" 
                fontSize={["16px", "17px", "18px"]}>
                  <Link href="/follow" color="#003399">Follow</Link>
              </Text>
            </Box>

 
            <Box background="gray.100" width={["80%", "60%", "30%", "15%"]} height="auto" borderRadius="15px" p={[3, 4]}>
              <Icon as={FaFacebook} boxSize={[4, 5, 6]} color="#003399" marginLeft={["20px", "25px", "30px"]} marginTop="10px" />
              <Text 
                fontFamily="Poppins" 
                fontWeight="500" 
                fontSize={["24px", "26px", "30px"]} 
                lineHeight="100%" 
                marginLeft={["20px", "25px", "30px"]} 
                marginTop="20px">
                  Facebook
              </Text>
              <Text 
                marginLeft={["20px", "25px", "30px"]} 
                marginTop="20px" 
                marginBottom="10px"
                fontFamily="Poppins" 
                fontWeight="500" 
                fontSize={["16px", "17px", "18px"]}>
                  <Link href="/follow" color="#003399">Follow</Link>
              </Text>
            </Box>


            <Box background="gray.100" width={["80%", "60%", "30%", "15%"]} height="auto" borderRadius="15px" p={[3, 4]}>
              <Icon as={FaInstagram} boxSize={[4, 5, 6]} color="#003399" marginLeft={["20px", "25px", "30px"]} marginTop="10px"/>
              <Text 
                fontFamily="Poppins" 
                fontWeight="500" 
                fontSize={["24px", "26px", "30px"]} 
                lineHeight="100%" 
                marginLeft={["20px", "25px", "30px"]} 
                marginTop="20px">
                  Instagram
              </Text>
              <Text 
                marginLeft={["20px", "25px", "30px"]} 
                marginTop="20px" 
                marginBottom="10px" 
                fontFamily="Poppins" 
                fontWeight="500" 
                fontSize={["16px", "17px", "18px"]}>
                  <Link href="/follow" color="#003399">Follow</Link>
              </Text>
            </Box>


            <Box background="gray.100" width={["80%", "60%", "30%", "15%"]} height="auto" borderRadius="15px" p={[3, 4]}>
              <Icon as={FaLinkedin} boxSize={[4, 5, 6]} color="#003399" marginLeft={["20px", "25px", "30px"]} marginTop="10px"/>
              <Text 
                fontFamily="Poppins" 
                fontWeight="500" 
                fontSize={["24px", "26px", "30px"]} 
                lineHeight="100%" 
                marginLeft={["20px", "25px", "30px"]} 
                marginTop="20px">
                  Linkedin
              </Text>
              <Text 
                marginLeft={["20px", "25px", "30px"]} 
                marginTop="20px" 
                marginBottom="10px" 
                fontFamily="Poppins" 
                fontWeight="500" 
                fontSize={["16px", "17px", "18px"]}>
                  <Link href="/follow" color="#003399">Follow</Link>
              </Text>
            </Box>
        </Center>


     



        <Box maxW="500px" mx="auto" mt="40px" p="4" borderRadius="md" boxShadow="md" >
            <Accordion.Root multiple defaultValue={["b"]}>
            {items.map((item, index) => (
                <Accordion.Item key={index} value={item.value}>
                    <Accordion.ItemTrigger>
                        <Span flex="1">{item.title}</Span>
                        <Accordion.ItemIndicator />
                    </Accordion.ItemTrigger>
                    <Accordion.ItemContent>
                    <Accordion.ItemBody>{item.text}</Accordion.ItemBody>
                    </Accordion.ItemContent>
                </Accordion.Item>
                ))}
            </Accordion.Root>
        </Box>




        {/* <Box background = "#003399" marginLeft="50px" width="93%" height="100%" borderRadius="25px" padding="40px" position="relative" overflow="hidden" marginBottom = "50px" marginTop = "50px">
            <Box width="100%" display="flex" justifyContent="flex-start" marginBottom="30px" marginTop="-10px">
                <Image src="/images/i10.png" alt="i10" width="40px" height="auto" />
            </Box>

            <Text fontFamily="Poppins" fontWeight="500" fontSize="50px" lineHeight="59px" letterSpacing="0%" color = "white">
                <Text as = "span" color = "yellow.500">Trusted by </Text>Movers, <br />
                    Shakers,
                <Text as = "span" color = "yellow.500"> and </Text> <br />
                    Planet Savers!
            </Text>


            <Box position="absolute" top = "-40px" right="10px" width="100%" height="auto">
                <Image src="/images/i17.png" alt="i17" width="100%" height="auto" />
            </Box>


            <Box position="absolute" top = "-40px" right="10px" width="100%" height="auto" >
                <Image src="/images/i18.png" alt="i18" width="100%" height="auto" zIndex = {1} opacity={0.15}/>
            </Box>
        </Box> */}







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
        </Box>

 */}







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
                </Box>
            </Center>
    

            <Box marginLeft = "70px" marginTop = "40px">
                <Image src = "/images/button.png" alt = "button" width = "10%" height = "50%" borderRadius = "30px"  />
            </Box>


            <Center py = "4" style={{ marginTop: "-130px" }}>
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
    )
}