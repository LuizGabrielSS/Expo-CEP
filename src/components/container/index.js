import React from "react";
import { Box,ScrollView,View } from "native-base";

export default function ContainerFunction({scroll=false,children}){

    return(
        <Box
        style={{
            height:"100%",
            width:"100%",
        }}
        >
            {
                scroll
                ? <ScrollView>
                    {children}
                </ScrollView>
                : <View>
                    {children}
                </View>
            }
        </Box>
    )
}