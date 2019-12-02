<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserFixtures extends Fixture
{
    private $encoder;

    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager)
    {
        $user = new User();
        $user->setUsername('admin');
    
        $user->setPassword('$argon2id$v=19$m=65536,t=4,p=1$bW9PeUs0Y2RyajFFai5YbQ$KB0pG5n73uF6OZQmw4S4REdCL3vj/WBMrO1v9jr0fqM');
    
        $manager->persist($user);
        $manager->flush();
    }
}
