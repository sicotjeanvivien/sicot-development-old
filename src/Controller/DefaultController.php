<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Common\Persistence\ObjectManager;
use App\Entity\User;

class DefaultController extends AbstractController
{
    /**
     * @Route("/", name="default")
     */
    public function index(ObjectManager $manager)
    {
        // $user = new User();
        // $user->setUsername('admin');
    
        // $user->setPassword('$argon2id$v=19$m=65536,t=4,p=1$bW9PeUs0Y2RyajFFai5YbQ$KB0pG5n73uF6OZQmw4S4REdCL3vj/WBMrO1v9jr0fqM');
    
        // $manager->persist($user);
        // $manager->flush();
        return $this->render('default/index.html.twig', [
            'controller_name' => 'DefaultController',
        ]);
    }

    /**
     * @Route("/experience", name="expRedirect")
     */
    public function expRedirect()
    {
        return $this->render('default/index.html.twig', [
            'controller_name' => 'DefaultController',
        ]);
    }

    /**
     * @Route("/competence", name="skillRedirect")
     */
    public function skillRedirect()
    {
        return $this->render('default/index.html.twig', [
            'controller_name' => 'DefaultController',
        ]);
    }

    /**
     * @Route("/contact", name="contactRedirect")
     */
    public function contactRedirect()
    {
        return $this->render('default/index.html.twig', [
            'controller_name' => 'DefaultController',
        ]);
    }
}
