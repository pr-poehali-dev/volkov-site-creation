import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-literary-cream to-emerald-50"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-heading text-5xl lg:text-6xl font-bold text-literary-charcoal leading-tight">
                Александр
                <span className="text-primary block">Волков</span>
              </h1>
              <p className="text-xl text-literary-sage max-w-lg">
                Автор знаменитого цикла о Волшебной стране Оз, создатель
                незабываемых сказок для детей и взрослых
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="font-medium">
                <Icon name="BookOpen" className="mr-2 h-5 w-5" />
                Читать произведения
              </Button>
              <Button variant="outline" size="lg" className="font-medium">
                <Icon name="Play" className="mr-2 h-5 w-5" />
                Слушать аудиокниги
              </Button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-literary-sage">
              <div className="flex items-center space-x-2">
                <Icon name="Calendar" className="h-4 w-4" />
                <span>1891-1977</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" className="h-4 w-4" />
                <span>Россия</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" className="h-4 w-4" />
                <span>14 книг</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 to-emerald-500/30 rounded-3xl overflow-hidden">
              <div className="w-full h-full bg-literary-sage/10 flex items-center justify-center">
                <Icon name="User" className="h-32 w-32 text-primary/40" />
              </div>
            </div>

            <Card className="absolute -bottom-6 -left-6 p-4 bg-background/95 backdrop-blur">
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Icon name="Star" className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">Популярное произведение</p>
                  <p className="text-xs text-muted-foreground">
                    «Волшебник Изумрудного города»
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
