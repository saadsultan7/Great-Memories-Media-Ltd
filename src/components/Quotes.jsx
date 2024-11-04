
import { FaBook, FaSpinner, FaCopy } from 'react-icons/fa'
import { Button } from './ui/Button'
import { Card  } from './ui/Card'
import { CardContent } from './ui/CardContent'
import React, { useRef, useEffect } from 'react'
import { Badge } from './ui/Badge'
import { useNavigate } from 'react-router-dom'
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion'
import './globals.css'

const FuturisticCard = ({ children, className }) => {
    const cardRef = useRef(null)
  
    useEffect(() => {
      const card = cardRef.current
      let bounds
  
      const rotateToMouse = (e) => {
        const mouseX = e.clientX
        const mouseY = e.clientY
        const leftX = mouseX - bounds.x
        const topY = mouseY - bounds.y
        const center = {
          x: leftX - bounds.width / 2,
          y: topY - bounds.height / 2
        }
        const distance = Math.sqrt(center.x**2 + center.y**2)
  
        card.style.transform = `
          scale3d(1.07, 1.07, 1.07)
          rotate3d(
            ${center.y / 100},
            ${-center.x / 100},
            0,
            ${Math.log(distance) * 2}deg
          )
        `
        card.style.background = `
          radial-gradient(
            circle at
            ${center.x * 2 + bounds.width / 2}px
            ${center.y * 2 + bounds.height / 2}px,
            rgba(255, 255, 255, 0.2),
            transparent 40%
          )`
      }
  
      const removeListener = () => {
        card.style.transform = ''
        card.style.background = ''
      }
  
      card.addEventListener('mouseenter', () => {
        bounds = card.getBoundingClientRect()
        document.addEventListener('mousemove', rotateToMouse)
      })
  
      card.addEventListener('mouseleave', () => {
        document.removeEventListener('mousemove', rotateToMouse)
        removeListener()
      })
  
      return () => {
        document.removeEventListener('mousemove', rotateToMouse)
        card.removeEventListener('mouseenter', () => {})
        card.removeEventListener('mouseleave', () => {})
      }
    }, [])
  
    return (
      <div
        ref={cardRef}
        className={`${className} card-animated relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 to-primary/30 hover:from-primary/20 hover:to-primary/40 backdrop-blur-md border border-primary/20 transition-all duration-200`}
      >
        <div className="absolute inset-0 bg-grid opacity-20"></div>
        <div className="relative z-10">{children}</div>
      </div>
    )
  }
  
  const IconWrapper = ({ children }) => (
    <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4 relative icon-wrapper bg-primary/20">
      <div className="absolute inset-0 bg-primary opacity-20 rounded-full filter blur-md"></div>
      <div className="relative z-10">{children}</div>
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        <circle className="progress-ring" cx="50" cy="50" r="48" />
      </svg>
    </div>
  )
  
  const ParticleAnimation = () => {
    const canvasRef = useRef(null)
  
    useEffect(() => {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      let animationFrameId
      const particles = []
  
      const resizeCanvas = () => {
        canvas.width = canvas.offsetWidth
        canvas.height = canvas.offsetHeight
      }
  
      const createParticles = () => {
        const particleCount = Math.floor((canvas.width * canvas.height) / 10000)
        for (let i = 0; i < particleCount; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2 + 1,
            dx: (Math.random() - 0.5) * 0.5,
            dy: (Math.random() - 0.5) * 0.5,
          })
        }
      }
  
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        particles.forEach((particle) => {
          particle.x += particle.dx
          particle.y += particle.dy
  
          if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1
          if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1
  
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
          ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'
          ctx.fill()
        })
  
        animationFrameId = requestAnimationFrame(animate)
      }
  
      resizeCanvas()
      createParticles()
      animate()
  
      window.addEventListener('resize', () => {
        resizeCanvas()
        particles.length = 0
        createParticles()
      })
  
      return () => {
        cancelAnimationFrame(animationFrameId)
        window.removeEventListener('resize', resizeCanvas)
      }
    }, [])
  
    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
  }
  
  export default function Quotes() {
    const navigate = useNavigate()
  
    const cards = [
      {
        icon: FaBook,
        title: "Booklets & Catalogs",
        description: "Professional printing for booklets, catalogs and magazines with various binding options.",
        badges: ["Saddle Stitching", "Perfect Binding", "Custom Covers", "UV Coating"],
        buttonText: "Get Booklet Quote"
      },
      {
        icon: FaSpinner,
        title: "Spiral Bound Books",
        description: "Durable spiral binding perfect for manuals, workbooks, and presentations.",
        badges: ["Plastic Coil", "Custom Covers", "Cover Scoring", "Multiple Sizes"],
        buttonText: "Get Spiral Bound Quote"
      },
      {
        icon: FaCopy,
        title: "Copy Services",
        description: "High-quality color and black & white copies for all your printing needs.",
        badges: ["Color Copies", "Black & White", "Stapled Sets", "Folded Pieces"],
        buttonText: "Get Copy Quote"
      }
    ]
  
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {cards.map((card, index) => (
          <FuturisticCard key={index} className="group">
            <ParticleAnimation />
            <CardContent className="p-6 relative z-10">
              <div className="mb-4">
                <IconWrapper>
                  <card.icon className="w-10 h-10 text-white" />
                </IconWrapper>
                <h2 className="text-2xl font-bold mb-2 text-primary neon-text">{card.title}</h2>
                <p className="text-primary/80 mb-4">{card.description}</p>
              </div>
              <div className="space-y-2 space-x-1 mb-6">
                {card.badges.map((badge, badgeIndex) => (
                  <Badge key={badgeIndex} variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    {badge}
                  </Badge>
                ))}
              </div>
              <Button
                className="w-full bg-primary/20 hover:bg-primary/30 text-primary border border-primary/40"
                onClick={() => navigate('/calculator')}
              >
                {card.buttonText}
              </Button>
            </CardContent>
          </FuturisticCard>
        ))}
      </div>
    )
  }