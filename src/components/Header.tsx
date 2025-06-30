import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Header() {
  const navigationItems = [
    { name: "Главная", href: "#home" },
    { name: "О нас", href: "#about" },
    { name: "Биография", href: "#biography" },
    { name: "Произведения", href: "#works" },
    { name: "Материалы", href: "#materials" },
    { name: "Образование", href: "#education" },
    { name: "Игры", href: "#games" },
    { name: "Наука", href: "#science" },
    { name: "Сообщество", href: "#community" },
    { name: "Новости", href: "#news" },
    { name: "Контакты", href: "#contacts" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Book" className="h-8 w-8 text-primary" />
            <div>
              <h1 className="font-heading text-xl font-bold text-foreground">
                Александр Волков
              </h1>
              <p className="text-sm text-muted-foreground">
                Писатель и сказочник
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            {navigationItems.slice(0, 6).map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
            <Button variant="outline" size="sm">
              <Icon name="Menu" className="h-4 w-4 mr-2" />
              Ещё
            </Button>
          </nav>

          <Button className="md:hidden" variant="outline" size="sm">
            <Icon name="Menu" className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
