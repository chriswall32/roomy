(function(angular) {
    angular
        .module("application")

        .factory("navigationService", function () {
            return {
                getNavigation,
                addNavigationItem,
                removeNavigationItem
            };

            let navigationItems = [];

            function getNavigation() {
                return navigationItems;
            }

            function addNavigationItem(item) {
                if (!navigationItems) navigationItems = [];
                navigationItems.push(item);
            }

            function removeNavigationItem(item) {
                navigationItems.forEach((itemInNavigation, index) => {
                    if (itemInNavigation.id === item.id) {
                        navigationItems.splice(index, 1);
                    }
                });
            }
        });
}(window.angular));
