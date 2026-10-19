workspace "domain-driven-desing" "Allocation service from Architecture Patterns with Python." {

    !adrs decisions
    !docs docs

    model {
        buyingTeam = person "Buying Team" "Needs to purchase furniture from suppliers."
        customer = person "Customer" "Wants to buy furniture."

        system = softwareSystem "Allocation" "Allocates stock to customer orders." {
            api = container "Allocation API" "Allocates stock to customer orders. Same service and contract in Python and TypeScript."
        }

        purchasing = softwareSystem "Purchasing" "Manages workflow for buying stock from suppliers."
        ecommerce = softwareSystem "Ecommerce" "Sells goods online."
        warehouse = softwareSystem "Warehouse" "Manages workflow for shipping goods to customers."

        buyingTeam -> purchasing "Uses"
        customer -> ecommerce "Buys from"
        warehouse -> customer "Dispatches goods to"
        purchasing -> api "Notifies about shipments" "HTTP/JSON"
        ecommerce -> system "Notifies about orders"
        ecommerce -> system "Asks for stock levels"
        ecommerce -> api "Notifies about orders" "HTTP/JSON"
        ecommerce -> api "Asks for stock levels" "HTTP/JSON"
        api -> warehouse "Sends instructions to"
    }

    views {
        properties {
            "mermaid.url" "https://mermaid.ink"
        }

        systemContext system "SystemContext" {
            include *
            include buyingTeam customer
            autolayout tb
        }

        container system "Containers" {
            include *
            include buyingTeam customer
            autolayout lr
        }

        styles {
            element "Person" {
                shape Person
                background #08427b
                color #ffffff
            }
            element "Software System" {
                background #1168bd
                color #ffffff
            }
            element "Container" {
                background #438dd5
                color #ffffff
            }
            relationship "Relationship" {
                color #707070
                thickness 2
            }
        }
    }
}
