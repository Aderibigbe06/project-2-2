"use client"

import {Image, Center, Text, Box, Stack, Heading, Button, Field, Input, Textarea, NativeSelect, Icon, Flex, Accordion, Span, Link} from "@chakra-ui/react"
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
        <Box width = "80%" maxWidth = "1200px" margin = "0 auto" background = "gray.100" borderRadius="30px" padding="10px" border = "gray.200" marginTop = "50px">
        <Center>
          <Stack justify="space-between" align="center" direction="row" width="100%" height="35px" padding="10px">
            <Image src = "/images/frame1.png" alt = "Frame1" width = "129px" height = "45px" />
            <Heading size="sm" fontFamily = "Inter" fontWeight = "600" fontSize = "20px" lineHeight = "20%" letterSpacing = "0%">Home</Heading>
            <Heading size="sm" fontFamily = "Inter" fontWeight = "600" fontSize = "20px" lineHeight = "20%" letterSpacing = "0%">Product</Heading>
            <Heading size="sm" fontFamily = "Inter" fontWeight = "600" fontSize = "20px" lineHeight = "20%" letterSpacing = "0%" color = "red.600" >Contact</Heading>
            <Heading size="sm" fontFamily = "Inter" fontWeight = "600" fontSize = "20px" lineHeight = "20%" letterSpacing = "0%" >Partner with us!</Heading>
            <Button borderRadius = "20px" width = "12%" fontSize = "15px">Get started</Button>
          </Stack>
        </Center>
        </Box>



        <div style={{ display: "flex", justifyContent: "center", position: "relative", marginTop: "30px"}}>
            <Image src="/images/i1.png" alt="i1" width="14%" height="18%" />
        </div>



        <Center>
            <Box>
                <Text width = "620px" height = "126px" fontFamily = "Ubuntu" fontWeight = "500" fontSize = "50px" lineHeight = "55px" letterSpacing = "0%" textAlign = "center">
                    Let's Connect! We are <br />
                    Here for You.
                </Text>

                <Text width = "762px" height = "72px" fontFamily = "Poppins" fontWeight = "400" fontSize = "24px" lineHeight = "100%" letterSpacing = "0%" textAlign = "center">
                    Got questions, feedback or just wanna say hi? Slide into our <br />
                    inbox or hit us up-your FuelFinder fam is always ready to help!
                </Text>
            </Box>
        </Center>



        <Center>
            <Box style = {{width: "35%", borderRadius: "35px", backgroundColor: "#FFFFFF"}}>
                <Box style={{ marginBottom: "1rem" }}>
                    <Field.Root>
                        <Field.Label>Full Name</Field.Label>
                            <Input placeholder = "what should we call you?" />
                    </Field.Root>
                </Box>

                <Box style={{ marginBottom: "1rem" }}>
                    <Field.Root>
                        <Field.Label>Email</Field.Label>
                            <Input placeholder = "where should we reply you?" />
                    </Field.Root>
                </Box>

                <Field.Root>
                    <Field.Label>Message</Field.Label>
                        <Textarea placeholder = "talk to us" />
                </Field.Root>

                <div style = {{paddingLeft: "5px", position: "relative", top: "30px" }}>
                    <Button borderRadius = "20px" width = "100%" fontSize = "15px">Send Message</Button>
                </div>
            </Box>
        </Center>




        <Center marginTop="70px">
            <Box width="90%">
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "40px" }}>
                {/* Text Block */}
                    <div style={{ maxWidth: "800px", textAlign: "center" }}>
                        <Text fontFamily="Ubuntu" fontWeight="500" fontSize="50px" lineHeight="55px">
                            Got Questions? We have <br />
                            Got Answers
                        </Text>

                        <Text fontFamily="Poppins" fontWeight="400" fontSize="24px" lineHeight="32px" marginTop="20px">
                            Before you hit us up, check out this frequently asked questions.We <br />
                            might already have the answers you are looking for!
                        </Text>
                    </div>

                    {/* Image Block */}
                    <div>
                        <Image src="/images/i2.png" alt="i2" style={{ width: "130px", height: "auto", marginTop: "-110px" }} />
                    </div>
                </div>
            </Box>
        </Center>




        <Center gap = "5" marginTop = "50px">
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




        <Box background = "#003399" marginLeft="50px" width="93%" height="100%" borderRadius="25px" padding="40px" position="relative" overflow="hidden" marginBottom = "50px" marginTop = "50px">
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
        </Box>



        

        <Box width = "100%" background="linear-gradient(88.81deg, rgba(255, 230, 142, 0) -0.15%, #F3F8FF 33.24%, #FFFFFF 64.13%, #F4F9FF 78.87%, #F8F3E7 109.42%)" textAlign = "center" marginBottom = "50px"  px="20px" py="30px">
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
        



        <Box background = " #F4F7FE" >
            <Center>
                <div style = {{ marginTop: "50px", marginLeft: "-1000px", }}>
                    <Image src = "/images/frame1.png" alt = "Frame1" width = "90%" height = "60%" />
                </div>
            </Center>
    

            <div style = {{marginLeft: "70px", marginTop: "40px"}} >
                <Image src = "/images/button.png" alt = "button" width = "10%" height = "50%" borderRadius = "30px"  />
            </div>


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



            <div style = {{ display: "flex", justifyContent: "center" }}>
                <Image src = "/images/frame 4.png" alt = "Frame 4" width = "8%" height = "8%" />
            </div>



            <Image src = "/images/fuel.png" alt = "Fuel" width = "100%" height = "90%" />
        </Box>
      </>
    )
}