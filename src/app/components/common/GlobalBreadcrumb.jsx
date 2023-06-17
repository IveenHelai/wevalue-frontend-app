import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
} from '@chakra-ui/react'

export default function GlobalBreadcrumb() {
    return (
        
		<Box className="full-width nav-shadow" >
            <Breadcrumb>
                <BreadcrumbItem>
                    <BreadcrumbLink color={"black"} href='#'>
                        Accueil
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator color={"black"} />
                <BreadcrumbItem>
                    <BreadcrumbLink color={"black"} href='#'>
                        Catalogue des Services
                    </BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
		</Box>
    )
}