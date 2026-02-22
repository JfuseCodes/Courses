import chefClaudeIcon from "./../../../assets/chef-claude/chef-claude-icon.png"

const Header = () => {

    return (
        <header className='cc--header h-108'>
            <span><img className='chef-claude-icon'src={chefClaudeIcon} alt='chef claude icon'/></span>
            <span className='cc--header-heading fs-32'>Chef Claude</span>
            
        </header>
    )
}

export default Header